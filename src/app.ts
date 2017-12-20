export class App {
  percentCompleted: number = 10;

  updateProgress() {
    this.percentCompleted += 10;

    if (this.percentCompleted > 100) {
      this.percentCompleted = 0;
    }
  }
}
