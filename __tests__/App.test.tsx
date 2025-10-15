import { fireEvent, render } from "@testing-library/react-native";
import { Home } from "../src/screens";

jest.mock("../src/store/api/homeApi.ts", () => ({
  useGetHomeQuery: jest.fn(),
  useGetDetailQuery: jest.fn()
}));

describe('Home to Detail Screen', () => {
  it('Home button navigate to detail screen', () => {
    const mockData = {
      results: [{ name: 'Pikachu' }]
    }

    const navigate = jest.fn();
    const navigation = { navigate }

    const storeApi = require('../src/store/api/homeApi.ts');
    storeApi.useGetHomeQuery.mockReturnValue({ data: mockData })
    storeApi.useGetDetailQuery.mockReturnValue({
      data: { sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png" } }
    })

    const { getAllByTestId } = render(
      <Home navigation={navigation as any} route={navigation as any} />
    )

    const button = getAllByTestId("button-list")
    fireEvent.press(button[0]);

    expect(navigate).toHaveBeenCalledWith('Detail', { name: "Pikachu" })
  })
})