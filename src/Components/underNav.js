import bugerIcon from "../picturesFolder/navIcons/burger.png";
import pizzaIcon from "../picturesFolder/navIcons/pizza.png";
import saladIcon from "../picturesFolder/navIcons/salad.png";
import frenchFriesIcon from "../picturesFolder/navIcons/french-fries.png";
import plasticBottleIcon from "../picturesFolder/navIcons/plastic-bottle.png";
import tacoIcon from "../picturesFolder/navIcons/taco.png";
import buritoIcon from "../picturesFolder/navIcons/burrito.png";
function UnderNav() {
  return (
    <div class="underNavContainer">
      <hr />
      <input class="searchBar" type="text" placeholder="Rechercher" />
      <div class="underNavIconsContainer">
        <div>
          <img class="underNavIcons" src={pizzaIcon} alt="" />
          <p>Pizza</p>
        </div>
        <div>
          <img class="underNavIcons" src={bugerIcon} alt="" />
          <p>Burgers</p>
        </div>
        <div>
          <img class="underNavIcons" src={saladIcon} alt="" />
          <p>Salads</p>
        </div>
        <div>
          <img class="underNavIcons" src={tacoIcon} alt="" />
          <p>Tacos</p>
        </div>
        <div>
          <img class="underNavIcons" src={buritoIcon} alt="" />
          <p>Wraps</p>
        </div>
        <div>
          <img class="underNavIcons" src={frenchFriesIcon} alt="" />
          <p>Fries</p>
        </div>
        <div>
          <img class="underNavIcons" src={plasticBottleIcon} alt="" />
          <p>Drinks</p>
        </div>
      </div>
    </div>
  );
}

export default UnderNav;