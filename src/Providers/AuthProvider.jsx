import { Children, createContext, useState } from "react";
import { getAuth } from "firebase/auth";
export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ Children }) => {
    const [user, setUser] = useState(null);

    const [loading,setLoading] = useState(true);
    const authInfo = {
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {
                Children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;