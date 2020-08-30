import Layout from '../components/Layout';
import configData from "../data/config.json";
export default function Home(props) {
  const config = props.configData;
    return (
       <Layout config={config}>
         <p>This is home</p>
       </Layout>
    );
}

export async function getStaticProps(){
  return{
    props:{
      configData
    }
  }
}