import { getAllMessageForOneKeyError } from '../../apiFunction/errorsMessages';

it("getAllMessageForOneKeyError return all text from one api error", () => {
  const listMessages = ['need username', 'need password'];
  const responseExpected = "need username need password ";

  expect(getAllMessageForOneKeyError(listMessages)).toStrictEqual(responseExpected);
});
