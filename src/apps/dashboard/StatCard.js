// A small presentational stat card for the dashboard.

import React from "react";
import PropTypes from "prop-types";

function StatCard({ label, value }) {
  return (
    <div
      className="stat-card"
      style={{
        display: "inline-block",
        border: "1px solid #ddd",
        borderRadius: 6,
        padding: 12,
        margin: 8,
        minWidth: 120,
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: 28, fontWeight: "bold" }}>{value}</div>
      <div style={{ color: "#666" }}>{label}</div>
    </div>
  );
}

StatCard.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default StatCard;
