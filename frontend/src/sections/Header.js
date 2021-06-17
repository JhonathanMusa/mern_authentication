import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../hooks/UserContext";
import useLogout from "../hooks/useLogout";
import InlineButton from "../components/InlineButton";

export default function Header() {
  const { user } = useContext(UserContext);
  const { logoutUser } = useLogout();
  return (
    <header>
      {user ? (
        <>
          Hello, {user.name}.
          <InlineButton name={"logout"} handleClick={logoutUser} />
        </>
      ) : (
        <div className="btnGroup">
          <Link to="/login">
            <InlineButton name={"login"} />
          </Link>

          <Link to="/register">
            <InlineButton name={"register"} />
          </Link>
        </div>
      )}
    </header>
  );
}
