require "test_helper"

class CheckForZurbTest < Capybara::Rails::TestCase
  feature "Using Zerb for styling" do
    scenario "check to see if zerb is loaded" do
      visit posts_path
      assert page.body.must_include "columns"
    end
  end
end
