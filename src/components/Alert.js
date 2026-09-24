export default function Alert(props) {
  return (
    <div style={{ height: "50px" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show alert-box ${
            props.alert.visible ? "show" : ""
          }`}
          role="alert"
          style={{
            transition: "all 0.8s ease-in-out",
            backgroundColor: "rgba(165, 238, 181, 0.69)",
            color: props.mode === "light" ? "black" : "white",
            opacity: props.alert.visible ? 1 : 0,
            transform: props.alert.visible
              ? "translateY(0)"
              : "translateY(-20px)",
          }}
        >
          <strong>{props.alert.type}</strong> : {props.alert.msg}

          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      )}
    </div>
  );
}