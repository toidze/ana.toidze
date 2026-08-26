import { revalidateTag } from "next/cache";
import { type NextRequest, NextResponse } from "next/server";
import { parseBody } from "next-sanity/webhook";
import { TAGS } from "@/sanity/lib/data";

/**
 * Sanity webhook target for instant updates. Configure a webhook in
 * sanity.io/manage → API → Webhooks pointing here, with a GROQ projection that
 * includes `_type` and the shared secret (SANITY_REVALIDATE_SECRET).
 */
export async function POST(req: NextRequest) {
  try {
    const { isValidSignature, body } = await parseBody<{ _type?: string }>(
      req,
      process.env.SANITY_REVALIDATE_SECRET
    );

    if (!isValidSignature) {
      return new NextResponse("Invalid signature", { status: 401 });
    }
    if (!body?._type) {
      return new NextResponse("Missing _type in payload", { status: 400 });
    }

    // `{ expire: 0 }` = don't serve stale, so the next request rebuilds
    // immediately (instant updates for a low-traffic portfolio).
    if (body._type === "siteSettings") {
      revalidateTag(TAGS.settings, { expire: 0 });
    } else if (body._type === "project") {
      revalidateTag(TAGS.project, { expire: 0 });
    } else {
      revalidateTag(TAGS.settings, { expire: 0 });
      revalidateTag(TAGS.project, { expire: 0 });
    }

    return NextResponse.json({ revalidated: true, type: body._type });
  } catch (err) {
    console.error("Revalidate webhook error:", err);
    return new NextResponse("Error revalidating", { status: 500 });
  }
}
