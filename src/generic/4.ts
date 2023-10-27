/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface PageInfo {
  pageInfo(): void;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component implements PageInfo { //також не зрозумів
  pageInfo() {
    console.log(this.props.title);
  }
}

export {};
