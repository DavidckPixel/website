{-# LANGUAGE CPP #-}
{-# LANGUAGE NoRebindableSyntax #-}
{-# OPTIONS_GHC -fno-warn-missing-import-lists #-}
{-# OPTIONS_GHC -w #-}
module Paths_imageParser (
    version,
    getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir,
    getDataFileName, getSysconfDir
  ) where


import qualified Control.Exception as Exception
import qualified Data.List as List
import Data.Version (Version(..))
import System.Environment (getEnv)
import Prelude


#if defined(VERSION_base)

#if MIN_VERSION_base(4,0,0)
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#else
catchIO :: IO a -> (Exception.Exception -> IO a) -> IO a
#endif

#else
catchIO :: IO a -> (Exception.IOException -> IO a) -> IO a
#endif
catchIO = Exception.catch

version :: Version
version = Version [0,1,0,0] []

getDataFileName :: FilePath -> IO FilePath
getDataFileName name = do
  dir <- getDataDir
  return (dir `joinFileName` name)

getBinDir, getLibDir, getDynLibDir, getDataDir, getLibexecDir, getSysconfDir :: IO FilePath



bindir, libdir, dynlibdir, datadir, libexecdir, sysconfdir :: FilePath
bindir     = "/home/davy/Documents/Website/Tests/imageTest/imageParser/.stack-work/install/x86_64-linux/752e439a73f77229ded738cfe3f2c4fe6ab304202569656ad4df6e0292a4fbbd/9.2.7/bin"
libdir     = "/home/davy/Documents/Website/Tests/imageTest/imageParser/.stack-work/install/x86_64-linux/752e439a73f77229ded738cfe3f2c4fe6ab304202569656ad4df6e0292a4fbbd/9.2.7/lib/x86_64-linux-ghc-9.2.7/imageParser-0.1.0.0-CaXv2mX9zxkMMwmvRVMtO-imageParser"
dynlibdir  = "/home/davy/Documents/Website/Tests/imageTest/imageParser/.stack-work/install/x86_64-linux/752e439a73f77229ded738cfe3f2c4fe6ab304202569656ad4df6e0292a4fbbd/9.2.7/lib/x86_64-linux-ghc-9.2.7"
datadir    = "/home/davy/Documents/Website/Tests/imageTest/imageParser/.stack-work/install/x86_64-linux/752e439a73f77229ded738cfe3f2c4fe6ab304202569656ad4df6e0292a4fbbd/9.2.7/share/x86_64-linux-ghc-9.2.7/imageParser-0.1.0.0"
libexecdir = "/home/davy/Documents/Website/Tests/imageTest/imageParser/.stack-work/install/x86_64-linux/752e439a73f77229ded738cfe3f2c4fe6ab304202569656ad4df6e0292a4fbbd/9.2.7/libexec/x86_64-linux-ghc-9.2.7/imageParser-0.1.0.0"
sysconfdir = "/home/davy/Documents/Website/Tests/imageTest/imageParser/.stack-work/install/x86_64-linux/752e439a73f77229ded738cfe3f2c4fe6ab304202569656ad4df6e0292a4fbbd/9.2.7/etc"

getBinDir     = catchIO (getEnv "imageParser_bindir")     (\_ -> return bindir)
getLibDir     = catchIO (getEnv "imageParser_libdir")     (\_ -> return libdir)
getDynLibDir  = catchIO (getEnv "imageParser_dynlibdir")  (\_ -> return dynlibdir)
getDataDir    = catchIO (getEnv "imageParser_datadir")    (\_ -> return datadir)
getLibexecDir = catchIO (getEnv "imageParser_libexecdir") (\_ -> return libexecdir)
getSysconfDir = catchIO (getEnv "imageParser_sysconfdir") (\_ -> return sysconfdir)




joinFileName :: String -> String -> FilePath
joinFileName ""  fname = fname
joinFileName "." fname = fname
joinFileName dir ""    = dir
joinFileName dir fname
  | isPathSeparator (List.last dir) = dir ++ fname
  | otherwise                       = dir ++ pathSeparator : fname

pathSeparator :: Char
pathSeparator = '/'

isPathSeparator :: Char -> Bool
isPathSeparator c = c == '/'
