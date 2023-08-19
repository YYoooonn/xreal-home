import { useModalRoute } from "@/modals/ModalRoutingProvider";

export default function ModalPage() {
  const { push } = useModalRoute();

  const handleChange =
    (name: "xreal" | "events" | "joinus" | "magazine") => () => {
      push(name);
    };

  return (
    <div
      style={{
        backgroundImage: "url(/assets/images/background.png)",
        height: "100vh",
      }}
    >
      {(["xreal", "events", "joinus", "magazine"] as const).map((v) => (
        <button key={v} onClick={handleChange(v)}>
          {v}
        </button>
      ))}
    </div>
  );
}
