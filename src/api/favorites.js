const favoritesKey = "favorites";

export class Favorites {
  static fetch() {
    return JSON.parse(localStorage.getItem(favoritesKey));
  }

  static isFavorite(name) {
    const currentFavs = this.fetch();
    return currentFavs && currentFavs.includes(name);
  }

  static toggleFavorite(name) {
    let currentFavs = this.fetch();
    if (!currentFavs) {
      localStorage.setItem(favoritesKey, JSON.stringify([name]));
      return true;
    } else {
      if (!currentFavs.includes(name)) {
        currentFavs.push(name);
        localStorage.setItem(favoritesKey, JSON.stringify(currentFavs));
        return true;
      } else {
        currentFavs = currentFavs.filter((f) => f !== name);
        localStorage.setItem(favoritesKey, JSON.stringify(currentFavs));
        return false;
      }
    }
  }
}
