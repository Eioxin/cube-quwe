/* imports? */

export class Calculator {

  public add(...aSummands :number[]) :number {
    if (aSummands.length > 1 ) {
      let tResult :number = 0;

      aSummands.forEach((aSummand :number, aIndex :number) => {
        tResult += aSummand;
      });

      return tResult;
    } else {
      throw new ReferenceError;
    }
  }

}
