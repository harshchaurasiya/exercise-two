import renderer from 'react-test-renderer';
import Clicks from '../src/components/clicks/Clicks';
import { ClickStore } from '../src/components/clicks/ClickStore';

it("renders without crash",()=>{
    const tree = renderer.create(<Clicks clickStore={ClickStore}/>)
    .toJSON();
})