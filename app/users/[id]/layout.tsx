import React from "react";
import Link from "next/link";
import { api } from "../../../utils/api";

const UserLayout = async ({ children, params }: React.PropsWithChildren & { params: { id: string } }) => {
  const [user, counter] = await api.user(params.id);

  return (
    <div className={"flashing-border"}>
      <small className={"layout-label"}>/users/[id] layout</small>

      <h2 className={"animate-character"}>
        {user.name} {counter}
      </h2>

      <nav>
        <ul>
          <li>
            <Link href={`/users/${params.id}`}>Profile</Link>
          </li>
          <li>
            <Link href={`/users/${params.id}/posts`}>Posts</Link>
          </li>
        </ul>
      </nav>

      <div>{children}</div>
    </div>
  );
};

export default UserLayout;
