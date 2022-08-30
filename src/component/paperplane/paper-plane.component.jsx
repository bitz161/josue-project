import "./paper-plane.styles.css";

const PaperPlane = () => {
  return (
    <div className="plane-container">
      <div class="paperplane">
        <div class="plane">
          <div class="wingRight"></div>
          <div class="wingLeft"></div>
          <div class="bottom"></div>
          <div class="top"></div>
          <div class="middle"></div>
        </div>
        <div class="clouds">
          <div class="cloudOne"></div>
          <div class="cloudTwo"></div>
          <div class="cloudThree"></div>
        </div>
      </div>
    </div>
  );
};

export default PaperPlane;
