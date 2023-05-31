import Auth from "@auth/core";
import Credentials from "@auth/core/providers/credentials";

const request = new Request("https://example.com");
const response = await Auth(request, {
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize({},request) {
        const response = await fetch(request);
        if (!response.ok) return null;
        return (await response.json()) ?? null;
      },
    }),
  ],
  secret: "...",
  trustHost: true,
});