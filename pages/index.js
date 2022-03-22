import Layout from '../components/Layout';
import Home from '../components/Home';
import db from '../utils/db';
import Product from '../models/Product';

export default function Index(props) {
	const { products } = props;
	return (
		<Layout>
			<Home products={products} />
		</Layout>
	);
}
export async function getServerSideProps() {
	await db.connect();
	const products = await Product.find({}).lean();
	await db.disconnect();
	return {
		props: {
			products: products.map(db.convertDocToObj),
		},
	};
}
