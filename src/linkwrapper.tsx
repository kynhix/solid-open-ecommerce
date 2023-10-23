import { useNavigate } from "@solidjs/router";
import { children, createEffect, ParentProps } from "solid-js"

export default function LinkWrapper(props: ParentProps) {
  const c = children(() => props.children);
  const navigate = useNavigate();
  createEffect(() => {
    const child = (c() as HTMLAnchorElement);
    child.onclick = (e: MouseEvent) => {
      e.preventDefault();
      navigate(child.pathname, { replace: true });
    }
  });
  return <>{c()}</>;
}
