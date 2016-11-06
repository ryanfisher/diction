defmodule Diction.PageController do
  use Diction.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
