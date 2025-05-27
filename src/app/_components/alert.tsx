import Container from "@/app/_components/container";
import { BLOG_PATH } from "@/lib/constants";
import cn from "classnames";

type Props = {
  preview?: boolean;
};

const Alert = ({ preview }: Props) => {
  return (
    <div
      className={cn("border-b dark:bg-slate-800", {
        "bg-neutral-800 border-neutral-800 text-white": preview,
        "bg-neutral-50 border-neutral-200": !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              Esta página es una vista previa{" "}
              <a
                href="/api/exit-preview"
                className="underline hover:text-teal-300 duration-200 transition-colors"
              >
                Haz clic aquí
              </a>{" "}
              para salir del modo de vista previa.{" "}
            </>
          ) : (
            <>
              El código fuente de este blog está{" "}
              <a
                href={`https://github.com/CappeArg/${BLOG_PATH}`}
                className="underline hover:text-blue-600 duration-200 transition-colors"
              >
                disponible en GitHub
              </a>
              .
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Alert;
