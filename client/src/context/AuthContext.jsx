import { createContext, useContext, useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";
import { Drawer } from "vaul";

const AuthContext = createContext();

const InitialComponent = () => {
  return (
    <>
      <div className="">You didn't select a component</div>
    </>
  );
};

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [ActiveCardComponent, setActiveCardComponent] = useState(
    () => InitialComponent
  );

  const auth = useRef(false);
  const activeUser = useRef(null);
  let user = activeUser.current;

  const checkAuthStatus = () => {
    const token = Cookies.get("user");
    if (token) {
      const authorizedUser = JSON.parse(token);
      activeUser.current = authorizedUser;
    } else {
      signOut();
    }
  };

  useEffect(() => {
    setLoading(true);
    checkAuthStatus();
    setLoading(false);
  }, []);

  const signIn = (user) => {
    setLoading(true);
    activeUser.current = user;
    auth.current = true;
    Cookies.set("user", JSON.stringify(user));
    Cookies.set("logged_in", true, { expires: 1 / 24 });
    setLoading(false);
  };

  const signOut = async () => {
    try {
      activeUser.current = null;
      auth.current = false;
      Cookies.remove("access_token");
      Cookies.remove("user");
      Cookies.set("logged_in", false);
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  };

  const toggleDrawer = (Component) => {
    setActiveCardComponent(() => Component);
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
        activeUser,
        signIn,
        signOut,
        loading,
        setLoading,
        user,
        toggleDrawer,
      }}
    >
      <Drawer.Root
        open={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        handleOnly={true}
      >
        <Drawer.Portal>
          <Drawer.Title className="font-medium mb-4 text-gray-900"></Drawer.Title>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-cyan-50 h-fit fixed bottom-0 left-0 right-0 outline-none rounded-t-lg my-4">
            <div className="">
              <Drawer.Handle className="my-4" />
              <div className="mx-2">{<ActiveCardComponent />}</div>
              <div className="flex justify-center mb-4">
                <button
                  className="rounded-md mt-4 bg-gray-900 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
                  onClick={() => setIsDrawerOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthVar = () => useContext(AuthContext);

export const useAuth = () => {
  return useAuthVar();
};
