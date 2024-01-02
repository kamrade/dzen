import { Button } from '~/uikit';

export function Showcase() {
  return (
    <div className="ShowcasePage">
      <div className="container">
        This is a Showcase
        <div className="pt-5 mt-5 container">
          <Button theme='primary'>Test 2</Button>
          <Button theme='secondary' size='md'>Test 3</Button>
        </div>
      </div>
    </div>
  );
}