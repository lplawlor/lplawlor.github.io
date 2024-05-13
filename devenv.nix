{ pkgs, ... }:

{
  languages = {
    typescript.enable = true;
    javascript = {
      enable = true;
      package = pkgs.nodejs_20;
      npm.enable = true;
    };
  };
}
