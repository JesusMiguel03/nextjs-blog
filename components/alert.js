import styles from "./alert.module.css"
import { clsx } from "clsx"

export default function Alert({ children, title, type }) {
  return (
    <>
      <div
        className={clsx({
          [styles.alert_header_bg_success]: type === "success",
          [styles.alert_header_bg_error]: type === "error",
        })}
      >
        <h2 className={styles.header}>{title || "Default title"}</h2>
      </div>
      <div
        className={clsx({
          [styles.alert_bg_content_success]: type === "success",
          [styles.alert_bg_content_error]: type === "error",
        })}
      >
        {children}
      </div>
    </>
  )
}
