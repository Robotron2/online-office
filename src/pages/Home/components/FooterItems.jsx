import { About, Features, Contact } from "./AllIcons"
import FooterItem from "./FooterItem"

const FooterItems = () => {
	return (
		// <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 justify-center">
		<div className="flex flex-col md:flex-row gap-6 sm:px-8 px-6 py-16 justify-between">
			<FooterItem Links={About} title="About" />
			<FooterItem Links={Features} title="Features" />
			<FooterItem Links={Contact} title="Contact Us" />
		</div>
	)
}

export default FooterItems
