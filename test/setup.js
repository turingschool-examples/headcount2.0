import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

const config = configure({ adapter: new Adapter() });

export default config;
