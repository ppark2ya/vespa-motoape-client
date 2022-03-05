import Button from '@components/Button';
import tw, { styled } from 'twin.macro';

const Box = styled.div`
  ${tw`text-3xl font-bold underline`}
`;

const Home = () => {
  return (
    <Box>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum assumenda
      ratione aliquam! Placeat sint consequatur tempore, deserunt ullam tempora.
      Aspernatur nulla natus sit accusantium placeat debitis voluptatibus
      doloremque itaque inventore?
      <Button>Hello twin macro</Button>
    </Box>
  );
};

export default Home;
