// Defines a series of interfaces for what all the hieraerchy objects should look like.

/*
 * Color stop object. Used in a continuous palette.
 */
export interface ColorStop {
  color: string
  offset: number
}

/*
 * A continuous palette is a container of |ColorStop|, with some other meta info
 */
export interface ContinuousPaletteType {
  id: string,
  label: string,
  type: string,
  stops: ColorStop[],
}

/*
 * A discrete palette is a finite array of colors.
 */
export interface DiscretePaletteType {
  id: string,
  label: string,
  type: string,
  colors: string[],
}

/*
 * A color collection is a grouping of discrete and continuous palettes.
 */
export interface ColorCollectionType {
  id: string,
  label: string,
  categoricalPalettes: DiscretePaletteType[],
  sequentialPalettes: ContinuousPaletteType[],
  divergingPalettes: ContinuousPaletteType[]
}
