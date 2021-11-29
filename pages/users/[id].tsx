import { GetStaticPaths, GetStaticPathsResult, GetStaticProps, NextPage } from "next"
import { ParsedUrlQuery } from "querystring";

interface UserProps {
    user: string
}

const User: NextPage<UserProps> = (props) => {
    return (
        <h1>
            {props.user}
        </h1>
    );
}

interface IParams extends ParsedUrlQuery {
    id: string
}

export const getStaticPaths: GetStaticPaths = () => {
    const ids = ["1", "2", "3"];

    const paths = ids.map(id => ({
        params: {
            id
        }
    }));

    return ({
        paths,
        fallback: false
    });
}

export const getStaticProps: GetStaticProps = (context) => {

    const { id } = context.params as IParams;
    const props: UserProps = {
        user: "USER: " + id
    }    
    return ({
        props
    });
}

export default User
