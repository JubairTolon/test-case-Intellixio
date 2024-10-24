// "use client";

// import { BackToHome } from "@/components/backToHome/backToHome";
// import { useUserAgentContext } from "@/components/providers/userAgentProvider";

// export const UserAgent = () => {
//   const { userAgent } = useUserAgentContext();

//   return (
//     <div>
//       <BackToHome />

//       {userAgent && (
//         <div className="flex font-mono font-semibold text-sm">
//           <div className="border p-2">UserAgent</div>

//           <div className="border p-2">{userAgent}</div>
//         </div>
//       )}

//       {!userAgent && <div>No user agent</div>}
//     </div>
//   );
// };

import { BackToHome } from "@/components/backToHome/backToHome";
import { UserAgentProvider } from "@/components/providers/userAgentProvider";
import { headers } from "next/headers";

const UserAgent = () => {
  // Fetch the user-agent from server-side headers
  const userHeaders = headers();
  const userAgent = userHeaders.get("user-agent") || "No user agent available";

  return (
    // Provide the server-side user agent to the context
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
