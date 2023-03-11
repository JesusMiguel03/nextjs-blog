import Alert from "../../components/alert"
import Layout from "../../components/layout"

export default function FirstPost() {
  return (
    <Layout>
      <Alert
        title='Success alert'
        type='success'
      >
        <p>If you see this alert then the action was made successfully.</p>
      </Alert>
      <Alert
        title='Error alert'
        type='error'
      >
        <p>
          But, if you see this other alert then the action was made with some problems, you must check if is correct or
          useful
        </p>
      </Alert>
    </Layout>
  )
}
