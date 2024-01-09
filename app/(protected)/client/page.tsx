"use client"
import { UserInfo } from "@/components/user-info";
import { useCurrentUser } from "@/hooks/use-current-user";
import { currentUser } from "@/lib/auth";

const ServerPage = () => {
    const user= useCurrentUser()
    return ( <UserInfo
    label="🖥️ Client Component"
    user={user}
    /> );
}
 
export default ServerPage;