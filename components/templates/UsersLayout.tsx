import { useMemo } from "react";
import Link from "next/link";
import { API_URL } from "../../api";

interface UsersLayoutProps {
    users: string[]
}

const UsersLayout: React.FC<UsersLayoutProps> = (props) => {

    const UserList = useMemo(() => (
        props.users.map(user => (
            <div key={user}>
                <Link href={`${API_URL}/users/${user}`}>
                    <a>User: {user}</a>
                </Link>
            </div>
        ))
    ), [props.users]);

    return (
    <>
        <div>
            {UserList}
        </div>
        <div>
            {props.children}
        </div>
    </>
    );
}

export default UsersLayout
