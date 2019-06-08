const Overlay = props => {
  return (
    <div className="Overlay">
      {props.children}
      <style jsx>
        {`
          .Overlay {
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2;
            position: fixed;
            width: 100vw;
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.5);
            top: 0px;
            left: 0px;
          }
        `}
      </style>
    </div>
  );
};

export default Overlay;
