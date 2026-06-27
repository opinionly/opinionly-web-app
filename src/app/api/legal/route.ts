import type { NextRequest } from "next/server";
import { isLegalDoc } from "@/lib/legal";
import { getLegalContent } from "@/lib/legal-server";

export const runtime = "nodejs";

export async function GET(request: NextRequest) {
  const type = request.nextUrl.searchParams.get("type");

  if (!isLegalDoc(type)) {
    return Response.json(
      {
        error:
          "Invalid type. Must be one of: cookies, eula, guidelines, privacy, terms-service.",
        ok: false,
        status: 400,
      },
      { status: 400 },
    );
  }

  try {
    const data = await getLegalContent(type);
    return Response.json({ data, ok: true, status: 200 });
  } catch {
    return Response.json(
      { error: "Document not found.", ok: false, status: 404 },
      { status: 404 },
    );
  }
}
