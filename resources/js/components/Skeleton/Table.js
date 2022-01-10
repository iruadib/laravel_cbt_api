import ContentLoader from "react-content-loader";
import React from "react";
import styles from './style.module.scss';

const TableSkeleton = ({ ...props }) => {
  return (
    <div className={styles.parent}>
      <ContentLoader
        viewBox="0 0 1000 550"
        backgroundColor="#eaeced"
        foregroundColor="#ffffff"
        {...props}
      >
        <rect x="51" y="45" rx="3" ry="3" width="906" height="17" />

        <rect x="104" y="114" rx="3" ry="3" width="141" height="10" />
        <rect x="305" y="114" rx="3" ry="3" width="299" height="10" />
        <rect x="661" y="114" rx="3" ry="3" width="141" height="10" />
        <rect x="863" y="114" rx="3" ry="3" width="72" height="10" />

        <rect x="104" y="175" rx="3" ry="3" width="141" height="10" />
        <rect x="305" y="175" rx="3" ry="3" width="299" height="10" />
        <rect x="661" y="175" rx="3" ry="3" width="141" height="10" />
        <rect x="863" y="175" rx="3" ry="3" width="72" height="10" />

        <rect x="104" y="233" rx="3" ry="3" width="141" height="10" />
        <rect x="305" y="233" rx="3" ry="3" width="299" height="10" />
        <rect x="661" y="233" rx="3" ry="3" width="141" height="10" />
        <rect x="863" y="233" rx="3" ry="3" width="72" height="10" />

        <rect x="57" y="274" rx="3" ry="3" width="897" height="2" />
        <rect x="52" y="80" rx="3" ry="3" width="906" height="17" />
        <rect x="53" y="57" rx="3" ry="3" width="68" height="33" />
        <rect x="222" y="54" rx="3" ry="3" width="149" height="33" />
        <rect x="544" y="55" rx="3" ry="3" width="137" height="33" />
        <rect x="782" y="56" rx="3" ry="3" width="72" height="33" />
        <rect x="933" y="54" rx="3" ry="3" width="24" height="33" />
      </ContentLoader>
    </div>
  );
}

export default TableSkeleton;