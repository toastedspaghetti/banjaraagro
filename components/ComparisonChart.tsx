// components/ModelComparisonChart.tsx
"use client";

import React from "react";
import styles from "../../../styles/c_comparisonchart.module.scss";

interface ModelBlock {
  tag: string;
  heading: string;
  subheading: string;
}

interface ModelComparisonChartProps {
  models: ModelBlock[]; // array of 3
  leftLabel: string;
  bottomLabel: string;
  heading?: string; // optional
  subHeading?: string; // optional
}

const ModelComparisonChart: React.FC<ModelComparisonChartProps> = ({
  models,
  leftLabel,
  bottomLabel,
}) => {
  return (
    <div className={styles.chartContainer}>
      <div className={styles.axisLabels}>
        <div className={styles.leftLabel}>{leftLabel}</div>
        <div className={styles.bottomLabel}>{bottomLabel}</div>
      </div>
      <div className={styles.cardStack}>
        {models.map((model, index) => (
          <div
            key={index}
            className={`${styles.card} ${
              index === 0
                ? styles.left
                : index === 1
                ? styles.middle
                : styles.right
            }`}
          >
            <div className={styles.cardContentContainer}>
              <div className={styles.cardDetails}>
                <div className={styles.tag}>{model.tag}</div>
                <h3 className={styles.heading}>{model.heading}</h3>
                <p className={styles.subheading}>{model.subheading}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelComparisonChart;
