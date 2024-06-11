import { useMemo } from "react";
import { motion } from "framer-motion";
import "./style.css";

const Bar = ({ name, colour, ticketCount, height }) => {
  return (
    <motion.div
      className="bar"
      initial={{ height: 0 }}
      animate={{ height: `${height}%` }}
      exit={{ height: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        backgroundColor: colour,
      }}
    >
      <div className="tooltip">
        {name} - {ticketCount}{" "}
      </div>
    </motion.div>
  );
};

const BarChart = ({ data, labels }) => {
  const maxTicketCount = useMemo(() => {
    return Math.max(...data.map((item) => item.ticketCount));
  }, [data]);
  return (
    <motion.div
      className="chart-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="chart">
        {data.map((item) => (
          <Bar
            key={item.id}
            height={(item.ticketCount / maxTicketCount) * 100}
            name={item.name}
            colour={item.colour}
            ticketCount={item.ticketCount}
          />
        ))}
      </div>
      <div className="y-axis-label">{labels?.y_axis ?? "y-label"}</div>
      <div className="x-axis-label">{labels?.x_axis ?? "x-label"}</div>
    </motion.div>
  );
};

export default BarChart;
