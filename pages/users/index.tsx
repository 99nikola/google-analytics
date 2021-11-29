import type { GetStaticProps } from "next";
import { ReactElement } from "react";
import MainLayout from "../../components/templates/MainLayout";
import UsersLayout from "../../components/templates/UsersLayout";
import { NextPageWithLayout } from "../_app";

interface UsersProps {
    users: string[]
}

const Users: NextPageWithLayout<UsersProps> = (props) => {
    return (
        <h1>Users page: {props.users}</h1>
    );
}

export const getStaticProps: GetStaticProps = () => {
    const props: UsersProps = {
        users: ["1", "2", "3"]
    }
    return ({
        props
    });
}


Users.getLayout = (page: ReactElement) => {
    return (
        <MainLayout>
            <UsersLayout users={page.props.users}>
                {page}
            </UsersLayout>
        </MainLayout>
    );
}

export default Users
