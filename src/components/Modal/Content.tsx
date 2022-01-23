import React from "react";

type ContentProps = {
  prefixCls: string;
  closable?: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  okText?: React.ReactNode;
  cancelText?: React.ReactNode;
  footer?: React.ReactNode;
};

const Content = (props: ContentProps) => {
  const {
    footer,
    prefixCls,
    closable,
    onClose,
    title,
    cancelText,
    okText,
    children,
  } = props;
  let footerNode: React.ReactNode;
  let closer: React.ReactNode;
  if (footer) {
    footerNode = <div className={`${prefixCls}-footer`}>{footer}</div>;
  } else {
    footerNode = (
      <div className={`${prefixCls}-footer`}>
        <button className="button" onClick={props.onClose}>
          {okText}
        </button>
        <button className="button" onClick={props.onClose}>
          {cancelText}
        </button>
      </div>
    );
  }

  if (closable) {
    closer = (
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className={`${prefixCls}-close`}
      >
        {<span className={`${prefixCls}-close-x`}>&times;</span>}
      </button>
    );
  }

  return (
    <div className={`${prefixCls}`} onClick={onClose}>
      <div
        className={`${prefixCls}-content`}
        onClick={(e) => e.stopPropagation()}
      >
        {closer}
        <div className={`${prefixCls}-header`}>
          <h4 className={`${prefixCls}-title`}>{title}</h4>
        </div>
        <div className={`${prefixCls}-body`}>{children}</div>
        {footerNode}
      </div>
    </div>
  );
};

export default Content;
