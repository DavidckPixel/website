module Main where

import Codec.Picture
import Control.Monad
import Data.Maybe
import Control.Monad.ST
import Data.Array.Repa (Array, DIM1, DIM2, U, D, Z (..), (:.)(..), (!))
import System.Environment (getArgs)
import System.FilePath (replaceExtension)
import Data.Vector.Storable as V
import qualified Codec.Picture.Types as M
import qualified Data.Array.Repa     as R -- for Repa

type Cord = (Int,Int)

{- main :: IO ()
main = do
    eimg <- readImage url
    case eimg of
        Left err -> putStrLn  ("Could not Read image")
        Right img -> putStrLn . show $ decode img
        Right _ -> putStrLn "Unexpected pixel format"

url :: FilePath
url = "../test.png"

showType :: DynamicImage -> String
showType (ImageY8 _) = "ImageY8"
showType (ImageY16 _) = "ImageY16"
showType (ImageYF _) = "ImageYF"
showType (ImageYA8 _) = "ImageA8"
showType _ = "unknown"

decode :: DynamicImage -> Vector (Maybe Cord)
decode (ImageYA8 image@(Image w h d)) = V.filter p (V.imap f d)
    where
        f :: Int -> (PixelBaseComponent PixelYA8) -> Maybe Cord
        f i p | p == 0 = Just (i,i)
              | otherwise = Nothing

        p :: Maybe Cord -> Bool
        p (Just _) = True
        p (Nothing) = False

        -}

func file = onImg someRepaFunction `fmap` readImage file

