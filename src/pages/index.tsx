import { Sample } from '@wgsbrands/shared-components';

import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Next.js Boilerplate"
          description="Next js Boilerplate for starting nextjs web apps within William Grant & Sons"
        />
      }
    >
      <Sample name="world" />
    </Main>
  );
};

export default Index;
