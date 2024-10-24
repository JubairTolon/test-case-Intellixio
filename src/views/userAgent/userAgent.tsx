import { BackToHome } from "@/components/backToHome/backToHome";
import { headers } from "next/headers";

const UserAgent = () => {
  const userHeaders = headers();
  const userAgent = userHeaders.get("user-agent") || "No user agent";

  return (
    <div>
      <BackToHome />
      <div className="flex font-mono font-semibold text-sm">
        <div className="border p-2">UserAgent</div>
        <div className="border p-2">{userAgent}</div>
      </div>
    </div>
  );
};

export default UserAgent;
