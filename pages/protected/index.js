import { useSession, signIn, signOut } from 'next-auth/react';

export default function Protected() {
    const { data: session } = useSession();
    if (session) {
        return (
            <>
                Signed in as {session.user.email || session.user.username}{' '}
                <br />
                <button onClick={() => signOut()}>Sign out</button>
            </>
        );
    }
    return (
        <>
            Not signed in <br />
            <button onClick={() => signIn()}>Sign in</button>
        </>
    );
}