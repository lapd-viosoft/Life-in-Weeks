/** @format */
import SVG from "react-inlinesvg";
import Arrow from "../../assets/arrow-right.svg";

const WEEKS_IN_YEAR = 52;
const TOTAL_YEARS = 90;

function GridArea() {
  const age = 23;
  const ageWeeks = age * WEEKS_IN_YEAR;

  function getWeekClass(week, year) {
    let className = "life-grid__el";

    const isActive = year * WEEKS_IN_YEAR + week <= ageWeeks;
    if (isActive) {
      className += " life-grid__el--active";
    }
    return className;
  }

  return (
    <div className="life-grid-wrapper">
      {/* Row 1 */}
      <div></div>
      <div></div>
      <div className="life-grid-wrapper__weeks">
        <div>
          <span>Weeks </span>
          <div>
            <SVG src={Arrow}></SVG>
          </div>
        </div>
      </div>
      {/* End Row 1 */}

      {/* Row 2 */}
      <div></div>
      <div></div>
      <div className="life-grid">
        <div className="life-grid__row">
          {Array.from({ length: WEEKS_IN_YEAR }, (_, week) => {
            const current = week + 1;
            let classes = "life-grid__el life-grid__label";
            classes +=
              current === 1 || current % 5 === 0
                ? " life-grid__label--show"
                : "";

            return (
              <span className={classes} key={week}>
                {current}
              </span>
            );
          })}
        </div>
      </div>
      {/* Row 2 end */}

      {/* Row 3 */}
      <div className="life-grid-wrapper__years">
        <div>
          <span>Years </span>
          <div>
            <SVG src={Arrow}></SVG>
          </div>
        </div>
      </div>

      <div className="life-grid">
        {Array.from({ length: TOTAL_YEARS }, (_, year) => {
          const current = year + 1;
          let classes = "life-grid__el life-grid__label";
          classes +=
            current === 1 || current % 5 === 0 ? " life-grid__label--show" : "";
          return (
            <div className="life-grid__row">
              <span className={classes} key={year}>
                {current}
              </span>
            </div>
          );
        })}
      </div>

      <section className="life-grid">
        {Array.from({ length: TOTAL_YEARS }, (_, year) => (
          <div className="life-grid__row" key={year}>
            {Array.from({ length: WEEKS_IN_YEAR }, (_, week) => (
              <span className={getWeekClass(week, year)} key={week}></span>
            ))}
          </div>
        ))}
      </section>
      {/* Row 3 end */}
    </div>
  );
}

export default GridArea;