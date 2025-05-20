export class StepController {
  step = $state<number>(0);

  constructor(initialStep: number) {
    this.step = initialStep
  }

  next = () => this.step++;
  previous = () => this.step--;
  reset = () => this.step = 0;
}