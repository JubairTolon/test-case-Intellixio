import { BackToHome } from "@/components/backToHome/backToHome";
import { UserAgentProvider } from "@/components/providers/userAgentProvider";
import { headers } from "next/headers";

const UserAgent = () => {
  const userHeaders = headers();
  const userAgent = userHeaders.get("user-agent") || "No user agent";

  return (
    <UserAgentProvider userAgent={userAgent}>
      <div>
        <BackToHome />
        <div className="flex font-mono font-semibold text-sm">
          <div className="border p-2">UserAgent</div>
          <div className="border p-2">{userAgent}</div>
        </div>
      </div>
    </UserAgentProvider>
  );
};

export default UserAgent;
