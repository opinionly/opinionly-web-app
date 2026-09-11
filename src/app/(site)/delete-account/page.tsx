import type { Metadata } from "next";
import NextLink from "next/link";

/**
 * Google Play requires a publicly reachable page, with no sign-in, where
 * someone can request their account and data be deleted. It is a common
 * rejection trigger when it is missing or dead, so this page exists for the
 * Android submission as much as for the people who use it.
 *
 * The in-app route comes first on purpose: it is instant, it needs no one at
 * Opinionly to act, and it is the better experience. Email is the fallback for
 * the people who can't reach it, which is exactly who the policy is written to
 * protect.
 */

export const metadata: Metadata = {
  alternates: { canonical: "/delete-account" },
  description:
    "How to delete your Opinionly account and everything in it, from inside the app or by email.",
  title: "Delete your Opinionly account",
};

const DELETED = [
  "Your profile and your account",
  "Your posts, and your replies, including replies you left on other people's posts",
  "Your likes, your connections, and your stand-in names",
  "Anything else you saved in the app",
];

export default function DeleteAccountPage() {
  return (
    <div className="legal-page mx-auto min-h-screen max-w-[760px] bg-cream px-5 pt-8 pb-16 text-[15px] leading-[1.7] text-ink-soft sm:px-8 sm:pt-12 sm:pb-24">
      <h1 className="mb-2 text-[28px] font-bold tracking-[-0.02em] text-ink sm:text-4xl">
        Delete your Opinionly account
      </h1>
      <p className="mb-10 text-[smaller] text-ink-faint">
        You can do this yourself in the app, or ask us to do it for you.
      </p>

      <h2>Delete it yourself</h2>
      <p>
        In the app, go to <b>Settings</b>, then <b>Account</b>, then{" "}
        <b>Delete</b>. It happens straight away and it can&rsquo;t be undone.
      </p>

      <h2>Ask us to delete it</h2>
      <p>
        If you can&rsquo;t get into the app, because you lost the phone or
        can&rsquo;t sign in or have already removed the app, email us and
        we&rsquo;ll do it for you.
      </p>
      <p>
        <a
          className="font-semibold text-ink underline"
          href="mailto:hello@opinionly.io?subject=Delete%20my%20account"
        >
          hello@opinionly.io
        </a>
      </p>
      <p>
        Send it from the email address on your account, so we know the request
        is really yours. If you can&rsquo;t, we&rsquo;ll ask you a couple of
        questions before we delete anything. We&rsquo;ll confirm once it&rsquo;s
        done, within 30 days.
      </p>

      <h2>What gets deleted</h2>
      <ul>
        {DELETED.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <p>
        Deleting your account also removes the other person&rsquo;s half of any
        private feedback conversation you were in.
      </p>
      <p>
        We keep a small amount of information afterwards, for safety and for
        legal reasons. Our{" "}
        <NextLink className="font-semibold text-ink underline" href="/privacy">
          Privacy Policy
        </NextLink>{" "}
        explains what stays and why.
      </p>
    </div>
  );
}
